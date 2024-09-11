import Note from "./Note";

function NoteList({ notes }) {
  return (
    <div>
        
      {notes.map((item) => (
        <Note key={item.id} data={item} />
      ))}
    </div>
  );
}
export default NoteList;
