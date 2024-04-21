interface CardProps {
    id:number;
    details:string
  }
  
  export const Card = (props: CardProps) => {
    return (
      <div>
        <h1>Component Card <b>{props.id}</b></h1>
        <p><b>{props.details}</b></p>
      </div>
    );
  };
  