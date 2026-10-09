const groups=[
    ['3D','Blender','Geometry Nodes','Houdini', 'Unreal Engine','Unity'],
    ['Programming','Python','C#','Java', 'JavaScript','C++'],
    ['Web','React','HTML','CSS','JavaScript'],
    ['Workflow','Git','GitHub','VS Code', 'Visual Studio','Unreal Engine','Unity','Canva']
];
export default function Skills(){
    return <section className="section dark-section">
        <div className="container">
            <div className="section-head">
                <span className="eyebrow">06 / Skills</span>
                <div>
                    <h2 className="section-title">Tools are useful. What matters is what I build with them.</h2>
                </div>
            </div>
            <div className="skills-grid">
                {groups.map(([title,...skills])=>
                    <div key={title}>
                        <span>{title}</span>
                        {skills.map(s=><strong key={s}>{s}</strong>)}
                    </div>
                )}
            </div>
        </div>
    </section>}