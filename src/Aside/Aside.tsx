import { myCV } from '../data';

const Aside = () => {
  return (
    <aside className='cv__personal'>
      <h2>Personal Data</h2>
      <img
        className='cv__personal-myPhoto'
        src={myCV.photo}
        alt={`${myCV.name} ${myCV.lastName} profile photo`}
      />
      <p>
        {myCV.name} {myCV.lastName}
      </p>
      <small>{myCV.position}</small>
    </aside>
  );
};

export { Aside };
