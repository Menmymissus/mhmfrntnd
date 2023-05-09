import React from 'react'
import axios from 'axios'
import { useState } from 'react'



const api_url = "/api/predict/"
const StressPredictionForm = () => {
    const [formData,setFormData] = useState({
        anxiety_level: '',
        self_esteem: '',
        mental_health_history: '',
        depression: '',
        headache: '',
        blood_pressure: '',
        sleep_quality: '',
        breathing_problem: '',
        noise_level: '',
        living_conditions: '',
        safety: '',
        basic_needs: '',
        academic_performance: '',
        study_load: '',
        teacher_student_relationship: '',
        future_career_concerns: '',
        social_support: '',
        peer_pressure: '',
        extracurricular_activities: '',
        bullying: '',
    });
    const [result,setResult] = useState(null);
    
    const handleChange = (event) => {
        setFormData({...formData,[event.target.name]:event.target.value});
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try{
            const response = await axios.post(api_url,formData);
            setResult(response.data);
            console.log('Prediction:', response.data.result);
        }catch(e){
            console.log(e);
        }
    }


  return (
    <div>
      <form className="stress-prediction-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="anxiety_level">Anxiety Level</label>
          <input
            type="number"
            className="form-control"
            id="anxiety_level"
            name="anxiety_level"
            value={formData.anxiety_level}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </div>
        <div className="form-group">
          <label htmlFor="self_esteem">Self-Esteem</label>
          <input
            type="number"
            className="form-control"
            id="self_esteem"
            name="self_esteem"
            value={formData.self_esteem}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mental_health_history">Mental Health History</label>
          <input
            type="number"
            className="form-control"
            id="mental_health_history"
            name="mental_health_history"
            value={formData.mental_health_history}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </div>
        <div className="form-group">
          <label htmlFor="depression">Depression</label>
          <input
            type="number"
            className="form-control"
            id="depression"
            name="depression"
            value={formData.depression}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </div>
        <div className="form-group">
          <label htmlFor="headache">Headache</label>
          <input
            type="number"
            className="form-control"
            id="headache"
            name="headache"
            value={formData.headache}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </div>
        <div className="form-group">
          <label htmlFor="blood_pressure">Blood Pressure</label>
          <input
            type="number"
            className="form-control"
            id="blood_pressure"
            name="blood_pressure"
            value={formData.blood_pressure}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </div>
        <div className="form-group">
          <label htmlFor="sleep_quality">Sleep Quality</label>
          <input
            type="number"
            className="form-control"
            id="sleep_quality"
            name="sleep_quality"
            value={formData.sleep_quality}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </div>
        <div className="form-group">
          <label htmlFor="breathing_problem">Breathing Problem</label>
          <input
            type="number"
            className="form-control"
            id="breathing_problem"
            name="breathing_problem"
            value={formData.breathing_problem}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </div>
        <div className="form-group">
          <label htmlFor="noise_level">Noise Level</label>
          <input
            type="number"
            className="form-control"
            id="noise_level"
            name="noise_level"
            value={formData.noise_level}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </div>
        <div className="form-group">
          <label htmlFor="living_conditions">Living Conditions</label>
          <input
            type="number"
            className="form-control"
            id="living_conditions"
            name="living_conditions"
            value={formData.living_conditions}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </div>
        <div className="form-group">
          <label htmlFor="safety">Safety</label>
          <input
            type="number"
            className="form-control"
            id="safety"
            name="safety"
            value={formData.safety}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </div>
        <div className="form-group">
          <label htmlFor="basic_needs">Basic Needs</label>
          <input
            type="number"
            className="form-control"
            id="basic_needs"
            name="basic_needs"
            value={formData.basic_needs}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </div>
        <div className="form-group">
          <label htmlFor="academic_performance">Academic Performance</label>
          <input
            type="number"
            className="form-control"
            id="academic_performance"
            name="academic_performance"
            value={formData.academic_performance}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </div>
        <div className="form-group">
          <label htmlFor="study_load">Study Load</label>
          <input
            type="number"
            className="form-control"
            id="study_load"
            name="study_load"
            value={formData.study_load}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="teacher_student_relationship">Teacher-Student Relationship</label>
          <input
            type="number"
            className="form-control"
            id="teacher_student_relationship"
            name="teacher_student_relationship"
            value={formData.teacher_student_relationship}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </div>
        <div className="form-group">
          <label htmlFor="future_career_concerns">Future Career Concerns</label>
          <input
            type="number"
            className="form-control"
            id="future_career_concerns"
            name="future_career_concerns"
            value={formData.future_career_concerns}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </div>
        <div className="form-group">
          <label htmlFor="social_support">Social Support</label>
          <input
            type="number"
            className="form-control"
            id="social_support"
            name="social_support"
            value={formData.social_support}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </div>
        <div className="form-group">
          <label htmlFor="peer_pressure">Peer Pressure</label>
          <input
            type="number"
            className="form-control"
            id="peer_pressure"
            name="peer_pressure"
            value={formData.peer_pressure}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </div>
        <div className="form-group">
          <label htmlFor="extracurricular_activities">Extracurricular Activities</label>
          <input
            type="number"
            className="form-control"
            id="extracurricular_activities"
            name="extracurricular_activities"
            value={formData.extracurricular_activities}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </div>
        <div className="form-group">
          <label htmlFor="bullying">Bullying</label>
          <input
            type="number"
            className="form-control"
            id="bullying"
            name="bullying"
            value={formData.bullying}
            onChange={handleChange}
            min="1"
            max="10"
          />
        </div>
        <button type="submit" onSubmit={handleSubmit} className="btn btn-primary">
          Predict Stress Level
        </button>
        {result && (
        <div className="prediction-result">
          <h2>Prediction: {result.result}</h2>
        </div>
      )}
        </form>
        
      </div>


  )
}

export default StressPredictionForm