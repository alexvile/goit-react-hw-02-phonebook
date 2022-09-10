const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li>
      {/* <div> */}
      <span>{name}: </span>
      <span>{number}</span>
      {/* </div> */}
      <button
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};
export default ContactItem;
