import React, {useState} from 'react'
import './App.css'
import Display from './components/Display'
import CalculatorBody from './components/CalculatorBody'

function App() {
    const [currentNum, setCurrentNum] = useState('0')
    const [firstNum, setFirstNum] = useState('0')
    const [lastNum, setLastNum] = useState('0')
    const [operator, setOperator] = useState(null)
    const [prevOperator, setPrevOperator] = useState(null)
    const [isNewNum, setIsNewNum] = useState(true)

    const formatNumber = (number) => {
        // return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        let parts = number.toString().split(".")
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        if (parts[0].length > 9) {
            setCurrentNum('Error')
            setIsNewNum(true)
            return 'Error'
        } else if (parts[0].length > 7) {
            return parts[0]
        }
        return parts.join(".").substr(0, 9)
    }


    const addToCurrent = (num) => {
        if (currentNum.length > 8)
            return
        if (isNewNum) {
            setCurrentNum(num.toString())
            setIsNewNum(false)
            return
        }
        if (num >= 0 && num <= 9)
            setCurrentNum((currNum) => parseFloat(currNum + num.toString()).toString())
        else {
            console.error('addToCurrent: error data', num)
        }
    }

    const handleOperator = (ope) => {
        if (ope !== 'plu' && ope !== 'sub' && ope !== 'mul' && ope !== 'div') {
            console.error('handleOperator: Error ope')
            return
        }
        if (operator !== null) {
            calc()
        } else {
            setFirstNum(currentNum)
            setLastNum(currentNum)
        }
        setOperator(ope)
        setIsNewNum(true)
    }

    const calc = () => {
        if (operator === null && prevOperator === null) {
            return
        }

        let num1 = parseFloat(firstNum)
        let num2 = isNewNum ? parseFloat(lastNum) : parseFloat(currentNum)
        let oper = operator || prevOperator

        let ret = 0
        switch (oper) {
            case 'mul':
                ret = num1 * num2
                break
            case 'div':
                if (num2 === 0)
                    ret = 'Error'
                else
                    ret = num1 / num2
                break
            case 'plu':
                ret = num1 + num2
                break
            case 'sub':
                ret = num1 - num2
                break
            default:
                console.log('Calc: Error')
        }

        if (!isNewNum)
            setLastNum(currentNum)
        setCurrentNum(ret.toString())
        setFirstNum(ret.toString())
        setOperator(null)
        setPrevOperator(oper)
        setIsNewNum(true)
    }

    const handlePercent = () => {
        if (operator !== null && operator !== 'div' && operator !== 'mul') {
            let ret = operator === 'plu' ? firstNum * currentNum/ 100 : firstNum / (currentNum / 100)

            if (!isNewNum)
                setLastNum(currentNum)
            setCurrentNum(ret.toString())
            setFirstNum(ret.toString())
            setOperator(null)
            setPrevOperator(operator === 'plu' ? 'mul' : 'sub')
            setIsNewNum(true)
        } else {
            setCurrentNum((curr) => (parseFloat(curr) / 100).toString())
        }
    }

    const clearCurrentNum = () => {
        setCurrentNum('0')
    }

    const toggleSign = () => {
        setCurrentNum((curr) => (-1 * parseFloat(curr)).toString())
    }

    const addDot = () => {
        if (currentNum.indexOf('.') === -1) {
            setCurrentNum((curr) => curr + '.')
        }
    }

    const clearAllNum = () => {
        setCurrentNum('0')
        setFirstNum('0')
        setLastNum('0')
        setOperator(null)
        setIsNewNum(true)
    }

    const handleControllFunc = (type, data) => {
        console.log('Controller: ', type, data)
        switch (type) {
            case 'num':
                addToCurrent(data)
                break
            case 'ac':
                clearAllNum()
                break
            case 'c':
                clearCurrentNum()
                break
            case 'operator':
                handleOperator(data)
                break
            case 'equal':
                calc()
                break
            case 'negative':
                toggleSign()
                break
            case 'dot':
                addDot()
                break
            case 'percent':
                handlePercent()
                break
            default:
                console.error('Controller: Error type')
        }
    }

    return (
        <div className="App">
            <Display num={formatNumber(currentNum)}/>
            <CalculatorBody controllFunc={handleControllFunc}/>
        </div>
    )
}

export default App
