const SkillBubbles = (props: { skills: any; }) => { 
    var skills = props.skills;
        skills = skills.split(",");
    
    return(
        <div className="flex flex-row justify-center flex-wrap">
            {skills.map((skill: any, index: number) => (
                <div key={index} className="font-thin m-3 border p-3 bg-slate-100 rounded-lg shadow text-center">
                    <p>{skill}</p>
                </div>
            ))}
        </div>

    )
}


export default SkillBubbles;