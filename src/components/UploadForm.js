// import React from 'react';
// import './Upload.css';





// const UploadForm = () => (
//   <div>
   
//     <h1>Internship Offer Letter Upload Form</h1>
//     <form>
//       <div className="inp-field">
//         <label htmlFor="registrationNo">Registration No</label>
//         <input type="number" name="registrationNo" id="registrationNo" />
//       </div>
//       <div className="inp-field">
//         <label htmlFor="name">Name</label>
//         <input type="text" name="name" id="name" autoComplete="off" />
//       </div>
//       <div className="inp-field">
//         <label htmlFor="email">Email</label>
//         <input type="email" name="email" id="email" autoComplete="off" />
//       </div>
//       <div className="inp-field">
//         <label htmlFor="companyName">Company Name</label>
//         <input type="text" name="companyName" id="companyName" autoComplete="off" />
//       </div>
//       <div className="inp-field">
//         <label htmlFor="stipend">Stipend</label>
//         <input type="number" name="stipend" id="stipend" autoComplete="off" />
//       </div>
//       <div className="inp-field">
//         <label htmlFor="duration">Duration (in months)</label>
//         <input type="number" name="duration" id="duration" autoComplete="off" />
//       </div>
//       <div className="inp-field">
//         <label htmlFor="dateOfJoining">Date of Joining</label>
//         <input type="date" name="dateOfJoining" id="dateOfJoining" />
//       </div>
//       <div className="inp-field">
//         <label htmlFor="dateOfEnding">Date of Ending</label>
//         <input type="date" name="dateOfEnding" id="dateOfEnding" />
//       </div>
//       <div className="inp-field">
//         <label htmlFor="offerLetter">Upload Offer Letter (PDF)</label>
//         <input type="file" name="offerLetter" id="offerLetter" accept="application/pdf" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   </div>
// );

// export default UploadForm;


// import React from 'react';
// import './Upload.css';





// const UploadForm = () => (
//   <div>
   
//     <h1>Internship Offer Letter Upload Form</h1>
//     <form>
//       <div className="inp-field">
//         <label htmlFor="registrationNo">Registration No</label>
//         <input type="number" name="registrationNo" id="registrationNo" />
//       </div>
//       <div className="inp-field">
//         <label htmlFor="name">Name</label>
//         <input type="text" name="name" id="name" autoComplete="off" />
//       </div>
//       <div className="inp-field">
//         <label htmlFor="email">Email</label>
//         <input type="email" name="email" id="email" autoComplete="off" />
//       </div>
//       <div className="inp-field">
//         <label htmlFor="companyName">Company Name</label>
//         <input type="text" name="companyName" id="companyName" autoComplete="off" />
//       </div>
//       <div className="inp-field">
//         <label htmlFor="stipend">Stipend</label>
//         <input type="number" name="stipend" id="stipend" autoComplete="off" />
//       </div>
//       <div className="inp-field">
//         <label htmlFor="duration">Duration (in months)</label>
//         <input type="number" name="duration" id="duration" autoComplete="off" />
//       </div>
//       <div className="inp-field">
//         <label htmlFor="dateOfJoining">Date of Joining</label>
//         <input type="date" name="dateOfJoining" id="dateOfJoining" />
//       </div>
//       <div className="inp-field">
//         <label htmlFor="dateOfEnding">Date of Ending</label>
//         <input type="date" name="dateOfEnding" id="dateOfEnding" />
//       </div>
//       <div className="inp-field">
//         <label htmlFor="offerLetter">Upload Offer Letter (PDF)</label>
//         <input type="file" name="offerLetter" id="offerLetter" accept="application/pdf" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   </div>
// );

// export default UploadForm;



import React from 'react';
import { useForm } from 'react-hook-form';
import './Upload.css';

const UploadForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can add your submission logic here, e.g., sending data to a server.
  };

  return (
    <div>
      <header>
        <div className="icon">
          <img
            src="https://media.licdn.com/dms/image/C560BAQFKt8O5GdaFjw/company-logo_100_100/0/1680080095222/vnr_vignanajyothiinstituteofengineeringandtechnology_logo?e=2147483647&v=beta&t=UhtoGoVMhtwHbanvVkMuh_q3AV9otg8YVS8EuXIG1ok"
            width="80px"
            alt="Institute Logo"
          />
        </div>
        <nav>
          <ul>
            <h1 className="la">
              VALLURUPALLI NAGESWARARAO VIGNANA JYOTHI INSTITUTE OF TECHNOLOGY
            </h1>
          </ul>
        </nav>
      </header>
      <h1>Internship Offer Letter Upload Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inp-field">
          <label htmlFor="registrationNo">Registration No</label>
          <input
            type="number"
            id="registrationNo"
            {...register('registrationNo', { required: 'Registration No is required' })}
          />
          {errors.registrationNo && <p>{errors.registrationNo.message}</p>}
        </div>

        <div className="inp-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div className="inp-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="inp-field">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            {...register('companyName', { required: 'Company Name is required' })}
          />
          {errors.companyName && <p>{errors.companyName.message}</p>}
        </div>

        <div className="inp-field">
          <label htmlFor="stipend">Stipend</label>
          <input
            type="number"
            id="stipend"
            {...register('stipend', { required: 'Stipend is required' })}
          />
          {errors.stipend && <p>{errors.stipend.message}</p>}
        </div>

        <div className="inp-field">
          <label htmlFor="duration">Duration (in months)</label>
          <input
            type="number"
            id="duration"
            {...register('duration', { required: 'Duration is required' })}
          />
          {errors.duration && <p>{errors.duration.message}</p>}
        </div>

        <div className="inp-field">
          <label htmlFor="dateOfJoining">Date of Joining</label>
          <input
            type="date"
            id="dateOfJoining"
            {...register('dateOfJoining', { required: 'Date of Joining is required' })}
          />
          {errors.dateOfJoining && <p>{errors.dateOfJoining.message}</p>}
        </div>

        <div className="inp-field">
          <label htmlFor="dateOfEnding">Date of Ending</label>
          <input
            type="date"
            id="dateOfEnding"
            {...register('dateOfEnding', { required: 'Date of Ending is required' })}
          />
          {errors.dateOfEnding && <p>{errors.dateOfEnding.message}</p>}
        </div>

        <div className="inp-field">
          <label htmlFor="offerLetter">Upload Offer Letter (PDF)</label>
          <input
            type="file"
            id="offerLetter"
            {...register('offerLetter', { required: 'Offer Letter is required' })}
            accept="application/pdf"
          />
          {errors.offerLetter && <p>{errors.offerLetter.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UploadForm;
