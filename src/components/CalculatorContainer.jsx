import React from 'react'
import logo from '../images/logo.svg'
import Calculator from './Calculator'


function CalculatorContainer() {
    return (
        <div
            className=' max-w-3xl mx-auto flex flex-col lg:max-w-5xl md:px-10'
        >
            <div
                className=' md:p-8 p-4 flex flex-col  justify-center items-center '
            >
                <img src={logo} className=' mb-10' alt="logo" />

                <h1 className=' text-4xl  text-gray-800 text-center  mb-6  font-semibold'>
                    Body Mass Index Calculator
                </h1>
                <p
                className=' text-gray-700  text-center'
                >
                    Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.
                </p>

                <Calculator/>


            </div>


        </div>
    )
}

export default CalculatorContainer