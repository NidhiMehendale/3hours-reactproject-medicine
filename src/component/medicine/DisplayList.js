import Card from "../UI/Card";
import classes from './DisplayList.module.css';
import Available from "./Available";



const DisplayList = (props) => {
  return (
    <Card>
      <ul className={classes.display}>
        {props.items.map((item) => (
          <Available
            key={item.id}
            id={item.name}
            name={item.name}
            description={item.description}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </ul>
    </Card>
  );
};

export default DisplayList;