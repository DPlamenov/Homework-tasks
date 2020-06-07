function bmi(name, age, weight, height) {
    let patient = {
        name,
        personalInfo: {
            age,
            weight,
            height
        }
    };

    let bmi = calcBmi(patient.personalInfo, bmiStatus);
    patient.BMI = bmi.bmi;
    patient.status = bmi.status;

    if(patient.status === 'obese'){
        patient.recommendation = 'admission required';
    }

    return patient;

    function calcBmi(patient, getBmiStatus) {
        let weight = patient.weight;
        let height = patient.height;


        let obj = {
            bmi: Math.round(weight / Math.pow(height / 100, 2)),
        };
        obj.status = getBmiStatus(obj.bmi);
        return obj;
    }

    function bmiStatus(bmi) {
        let r = '';
        if (bmi < 18.5) {
            r = 'underweight';
        } else if (bmi < 25) {
            r = 'normal';
        } else if (bmi < 30) {
            r = 'overweight';
        } else if(bmi >= 30){
            r = 'obese';
        }

        return r;
    }
}


console.log(bmi('Peter', 29, 95, 172));
