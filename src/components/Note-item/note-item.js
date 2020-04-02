import React from 'react';
import './note-item-style.scss'
const NoteItem = props => {
    const colors=[
         {
             "bgc":"rgb(255, 204, 204)",
             "border": "rgb(255, 102, 102)"
         },
         {
             "bgc":"rgb(179, 230, 204)",
             "border": "rgb(64, 191, 125)"
         },
        {
            "bgc":"rgb(153, 221, 255)",
            "border": "rgb(0, 170, 255)"
        },
        {
            "bgc":"rgb(255, 255, 204)",
            "border": "rgb(255, 255, 0)"
        }

    ];
    let color={};
    let defineColor=()=>{
      switch (props.color) {
          case "red":{
              color=colors[0];
              break;
          }
          case "green":{
              color=colors[1];
              break;
          }
          case "blue":{
              color=colors[2];
              break;
          }
          case "yellow":{
              color=colors[3];
              break;
          }
          default:{
              color=colors[Math.random()*4];
              break;
          }
      }
    };
    defineColor();
    return (
        <div className={"note-item"} style={{backgroundColor:color.bgc, border: `1px solid ${color.border}`}}>
            <div style={{borderBottom:`1px solid ${color.border}`}}>
                <h3>{props.title}</h3>
            </div>
            <div className={"note-item-title"}>
                <p>{props.context}</p>
            </div>
        </div>
    );
};

export default NoteItem;