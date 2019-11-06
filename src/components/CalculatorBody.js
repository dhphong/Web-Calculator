import React, {useState} from 'react'
import './calculator-body.css'
import Button from './CalculatorElement/Button'

const CalculatorBody = function (props) {

    const {controllFunc} = props

    const [isAC, setIsAC] = useState(true)

    const handleACButton = () => {
        console.log('AC Button pressed!')
        controllFunc(isAC ? 'ac' : 'c', null)
        if (!isAC) {
            setIsAC(true)
        }
    }

    const handleNegativeButton = () => {
        console.log('Negative Button pressed!')
        controllFunc('negative', null)
    }

    const handlePercentButton = () => {
        console.log('Percent button pressed:')
        controllFunc('percent')
    }

    const handleOperatorButton = (type) => {
        controllFunc('operator', type)
        console.log(type + ' button')
    }

    const handleNumButton = (num) => {
        console.log(num)
        setIsAC(false)
        controllFunc('num', num)
    }

    const handleEqualButton = () => {
        console.log('Equal button')
        controllFunc('equal', null)
    }

    const handleDotButton = () => {
        console.log('Dot Button')
        setIsAC(false)
        controllFunc('dot', null)
    }

    return (
        <div className={'calculator-body'}>
            <div className="row">
                <Button bcolor={'#c7c7c9'} text={isAC ? 'AC' : 'C'} mulButton={1} callbackFnc={handleACButton}/>
                <Button bcolor={'#c7c7c9'} text={'+/-'} mulButton={1} callbackFnc={handleNegativeButton}/>
                <Button bcolor={'#c7c7c9'} text={'%'} mulButton={1} callbackFnc={handlePercentButton}/>
                <Button bcolor={'#f97e0f'} text={'÷'} mulButton={1} textColor={'white'} callbackFnc={() => { handleOperatorButton('div') }}/>
            </div>
            <div className="row">
                <Button bcolor={'#d4d3d8'} text={'7'} mulButton={1} callbackFnc={() => { handleNumButton(7) }}/>
                <Button bcolor={'#d4d3d8'} text={'8'} mulButton={1} callbackFnc={() => {handleNumButton(8)}}/>
                <Button bcolor={'#d4d3d8'} text={'9'} mulButton={1} callbackFnc={() => {handleNumButton(9)}}/>
                <Button bcolor={'#f97e0f'} text={'✕'} mulButton={1} textColor={'white'} callbackFnc={() => {handleOperatorButton('mul')}}/>
            </div>
            <div className="row">
                <Button bcolor={'#d4d3d8'} text={'4'} mulButton={1} callbackFnc={ () => {handleNumButton(4)}}/>
                <Button bcolor={'#d4d3d8'} text={'5'} mulButton={1} callbackFnc={ () => {handleNumButton(5)}}/>
                <Button bcolor={'#d4d3d8'} text={'6'} mulButton={1} callbackFnc={() => {handleNumButton(6)}}/>
                <Button bcolor={'#f97e0f'} text={'―'} mulButton={1} textColor={'white'} callbackFnc={() => {handleOperatorButton('sub')}}/>
            </div>
            <div className="row">
                <Button bcolor={'#d4d3d8'} text={'1'} mulButton={1} callbackFnc={() => {handleNumButton(1)}}/>
                <Button bcolor={'#d4d3d8'} text={'2'} mulButton={1} callbackFnc={() => {handleNumButton(2)}}/>
                <Button bcolor={'#d4d3d8'} text={'3'} mulButton={1} callbackFnc={() => {handleNumButton(3)}}/>
                <Button bcolor={'#f97e0f'} text={'+'} mulButton={1} textColor={'white'} callbackFnc={() => {handleOperatorButton('plu')}}/>
            </div>
            <div className="row">
                <Button bcolor={'#d4d3d8'} text={'0'} mulButton={2} callbackFnc={() => {handleNumButton(0)}}/>
                <Button bcolor={'#d4d3d8'} text={'.'} mulButton={1} callbackFnc={handleDotButton}/>
                <Button bcolor={'#f97e0f'} text={'='} mulButton={1} textColor={'white'} callbackFnc={handleEqualButton}/>
            </div>
        </div>
    )
}

export default CalculatorBody
