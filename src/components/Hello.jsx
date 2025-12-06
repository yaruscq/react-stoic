const name = "CQ";

function Hello(props) {
  return (
    <div>
      <h1>
        {props.message} {props.emoji} {props.name} {props.seatNumbers}
      </h1>
      <h2>Wow!</h2>
      <hr />
    </div>
  );
}

function Hello2({ name, message, emoji, seatNumbers }) {
  return (
    <div>
      <h1>
        {message} {emoji} {name} {seatNumbers}
      </h1>
      <h1>Wow!</h1>
      <hr />
    </div>
  );
}

function Hello3(props) {
  return (
    <div>
      <h1>
        {props.person.message} {props.person.emoji} {props.person.name}
        {props.person.seatNumbers}
      </h1>
      <h1>Wow!</h1>
      <hr />
    </div>
  );
}

function Hello4({ person }) {
  return (
    <div>
      <h1>
        {person.message} {person.emoji} {person.name} {person.seatNumbers}
      </h1>
      <h1>Wow!</h1>
      <hr />
    </div>
  );
}

export default Hello;
export { Hello2, Hello3, Hello4, name };
