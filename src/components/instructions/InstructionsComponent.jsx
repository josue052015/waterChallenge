import React, { useEffect, useState } from 'react'
import styles from './styles.css'

const InstructionsComponent = ({ waterJugInformation }) => {

    const [instructions, setInstructions] = useState([{}])

    const getRandomId = (currentIndex) => {
        return `${Math.random() * 100}${currentIndex}`
    }

    const generateNewStep = (bucketX, bucketY, explanation) => {
        return { bucketX: Number(bucketX), bucketY: Number(bucketY), explanation: explanation }
    }

    const NoSolutionMessage = () => (
        <>
            <h3 style={{ "textAlign": "center" }} >No solution</h3>
        </>
    )

    const areValidJugMeasures = (bucketX, bucketY, waterAmount) => {
       
        if (bucketX + bucketY == waterAmount) return true;

        if (bucketX > bucketY) {
            if ((waterAmount % bucketY) > 0 && ((bucketX !== waterAmount) && (bucketY !== waterAmount))) return false

            switch((bucketX < waterAmount)){
                case true:
                    
                if(((bucketX + bucketY) > waterAmount) || (bucketX + bucketY) < waterAmount) return false
                
                    break;
            }
            
        }
        if (bucketY > bucketX) {
            if ((waterAmount % bucketX) > 0 && ((bucketX !== waterAmount) && (bucketY !== waterAmount))) return false
            
            switch((bucketY < waterAmount)){
                case true:
                    
                if(((bucketX + bucketY) > waterAmount) || (bucketX + bucketY) < waterAmount) return false
                
                    break;
            }
        }

        if ((bucketX + bucketY) < waterAmount) return false

        return true;
    }

    const generateInstructions = () => {
        const waterAmountExpected = Number(waterJugInformation.waterAmount);
        const bucketXMeasure = Number(waterJugInformation.bucketX)
        const bucketYMeasure = Number(waterJugInformation.bucketY)
        let currentWaterAmount = 0;
        let bucketX = 0;
        let bucketY = 0;
        let steps = [];

        const areValidInputs = (((bucketXMeasure > 0 && bucketYMeasure > 0) && waterAmountExpected > 0) && areValidJugMeasures(bucketXMeasure, bucketYMeasure, waterAmountExpected))

        switch (areValidInputs) {

            case true:

                while (currentWaterAmount < waterAmountExpected) {
                    if (bucketXMeasure == waterAmountExpected) {
                        bucketX += bucketXMeasure;
                        steps.push(generateNewStep(bucketX, bucketY, 'Fill bucket x'))
                        currentWaterAmount = waterAmountExpected
                    }

                    else if (bucketYMeasure == waterAmountExpected) {
                        bucketY += bucketYMeasure;
                        steps.push(generateNewStep(bucketX, bucketY, 'Fill bucket y'))
                        currentWaterAmount = waterAmountExpected
                    }

                    else if ((bucketXMeasure + bucketYMeasure) == waterAmountExpected) {
                        bucketX += bucketXMeasure;
                        steps.push(generateNewStep(bucketX, bucketY, 'Fill bucket x'))

                        bucketY += bucketYMeasure;
                        steps.push(generateNewStep(bucketX, bucketY, 'Fill bucket y'))

                        break
                    }

                    else if (bucketXMeasure < bucketYMeasure) {

                        bucketX = Number(bucketXMeasure);

                        steps.push(generateNewStep(bucketX, bucketY, 'Fill bucket x'))

                        currentWaterAmount += Number(bucketX);


                        bucketY += bucketX;
                        bucketX = 0
                        steps.push(generateNewStep(bucketX, bucketY, 'Transfer bucket x to Bucket y'))

                    }
                    else if (bucketXMeasure > bucketYMeasure) {

                        bucketY = Number(bucketYMeasure);

                        steps.push(generateNewStep(bucketX, bucketY, 'Fill bucket y'))

                        currentWaterAmount += Number(bucketY);


                        bucketX += bucketY;
                        bucketY = 0
                        steps.push(generateNewStep(bucketX, bucketY, 'Transfer bucket y to Bucket x'))

                    }

                    else {

                        break;

                    }

                }

                break;

        }

        setInstructions(steps)
    }

    useEffect(() => {

        generateInstructions()

    }, [waterJugInformation])

    return (
        <>
            {
                instructions.length > 0 ?
                    <table>
                        <thead>
                            <tr>
                                <th>Bucket X</th>
                                <th>Bucket Y</th>
                                <th>explanation</th>
                            </tr>

                        </thead>
                        <tbody>
                            {instructions?.map((instruction, index) => (

                                <tr key={index}>
                                    <td key={getRandomId(index)}>{instruction.bucketX}</td>
                                    <td key={getRandomId(index)}>{instruction.bucketY}</td>
                                    <td key={getRandomId(index)}>{instruction.explanation}</td>
                                </tr>
                            ))

                            }
                        </tbody>
                    </table>

                    :

                    <NoSolutionMessage />
            }


        </>
    )
}

export default InstructionsComponent