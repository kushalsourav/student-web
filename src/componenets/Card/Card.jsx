import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({search, filter, studentsList}) => {
    console.log(studentsList.map((stu) => stu))
    return(
        <>
        {
            studentsList.map((student) => {
                if(search && filter.indexOf(search) === -1) {
                    return <Fragment key={student.name}></Fragment>;
                }
                return(
                    <div className="card-vertical-sm">
                       {student.name}
                    </div>
                )
            })
        }
        </>
    );
};

export default Card;