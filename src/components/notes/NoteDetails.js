import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Note from './Note';
import React from 'react';
import { Spinner } from '../Animations';

const NoteDetails = (props) => {
  const { id } = useParams();

  const { data, error, isPending } = useFetch('/notes');
  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <Spinner></Spinner>}
      {data && <Note notes={data.data.notes} id={parseInt(id, 10)} />}
    </div>
  );
};

export default NoteDetails;
