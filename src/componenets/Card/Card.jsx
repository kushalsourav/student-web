import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({search, filterText, studentsList}) => {
  
    return(
        <div className="card-row">
        {
            studentsList.map((student) => {
                if( filterText !== 'interests' && filterText !== 'hobbies' && student[filterText].toLowerCase().indexOf(search) === -1) {
                    return <Fragment key={student.name}></Fragment>;
                }
                return(
                    <div className="card">
                       <h3>{student.name}</h3>
                       <p>{student.course}</p>
                       <ul>
                       {student.interests.map((e) => {
                        return<>
                        <li>{e}</li></>
                       })}
                       </ul>

                    </div>
                )
            })
        }
        </div>
    );
};

export default Card;