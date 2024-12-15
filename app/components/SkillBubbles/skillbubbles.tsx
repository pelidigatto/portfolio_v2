interface SkillBubblesProps {
    skills: string;
}

const SkillBubbles = (props: SkillBubblesProps) => { 
    const skills = props.skills.split(",");

    return(
        <div className="flex flex-row justify-center flex-wrap">
            {skills.map((skill: string, index: number) => (
                <div key={index} className="font-thin m-3 border p-3 bg-slate-100 rounded-lg shadow text-center">
                    <p>{skill}</p>
                </div>
            ))}
        </div>
    )
}


export default SkillBubbles;