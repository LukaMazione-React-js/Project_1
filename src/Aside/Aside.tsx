import { CV_Personal } from '../types';

type Props = {
    data: CV_Personal
}

const Aside = ({data}: Props) => {
  return (
    <aside className='cv__personal'>
      <h2>Personal Data</h2>
      <img
        className='cv__personal-myPhoto'
        src={data.photo}
        alt={`${name} ${data.lastName} profile photo`}
      />
      <p>
        {data.name} {data.lastName}
      </p>
      <small>{data.position}</small>
    </aside>
  );
};

export { Aside };
