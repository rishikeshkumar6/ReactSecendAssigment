
export function Invitation(props){
    return (
        <div id='invite'>
              Subject :{props.subject}
  To : {props.mail}
  
  Hi , {props.name}
  
 <p> I am having a birthday party next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are coming<br></br>
  . you know some of them -{props.friends}
  
  My house is behind our school , near Green field Avenue .<br></br>
  
  I hope you will come and see you soon .</p>
  
  from ,<br></br>
 {props.name}

        </div>
    )
}