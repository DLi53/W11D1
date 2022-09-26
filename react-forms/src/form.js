import { useState } from 'react'

const CreateForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [staff, setStaff] = useState('');
  const [bio, setBio] = useState('');
  const [emailNotifications, setEmailNotifications] = useState('');

  return ( 
    <form action="">
      <label htmlFor="name">
        <h2>Name</h2>
        <input type="text" name="name" value={name} required onChange={e => setName(e.target.value)}/>
      </label>

      <label htmlFor="email">
        <h2>Email</h2>
        <input type="text" name="email" value={email} required onChange={e => setEmail(e.target.value)}/>
      </label>

      <label htmlFor="phone">
        <h2>Phone</h2>
        <input type="tel" placeholder="e.g. 123-456-7890" name="phone" value={phoneNumber} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={e => setPhoneNumber(e.target.value)}/>
      </label>

      <label htmlFor="phoneType">
        <h2>PhoneType</h2>
        <select name="phoneType" value={phoneType} onChange={e => setPhoneType(e.target.value)}>
          <option value="home">Home</option>
          <option value="work">Work</option>
          <option value="mobile">Mobile</option>
        </select>
      </label>

      <label htmlFor="staff">
        <h2>Staff</h2>
        <input type="radio" name="staff" value="instructor" onChange={e => setStaff(e.target.value)} checked={staff === 'instructor'}/>instructor
        <input type="radio" name="staff" value="student" onChange={e => setStaff(e.target.value)} checked={staff === 'student'}/>student
      </label>

      <label htmlFor="bio">
        <h2>Bio</h2>
        <textarea name="bio" cols="10" rows="4" value={bio} onChange={e => setBio(e.target.value)}></textarea>
      </label>

      <label htmlFor="emailNotifications">
        <p>Would you like email notifications?</p>
        <input type="checkbox" name="emailNotifications" placeholder={emailNotifications} value="true" onChange={e => setEmailNotifications(e.target.value)}/> Yes
      </label>

      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateForm;