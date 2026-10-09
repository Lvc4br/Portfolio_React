const experiments=["Blender Python Tool","Procedural Geometry","React Interaction","Material Study","Creative Coding","Workflow Automation"];
export default function Lab(){
    return <section id="lab" className="section">
        <div className="container">
            <div className="section-head">
                <span className="eyebrow">05 / Lab</span>
                <div>
                    <h2 className="section-title">Small experiments are part of the work.</h2>
                    <p className="section-copy">A place for studies that are too small to become case studies, but useful enough to document.</p>
                </div>
            </div>
            <div className="lab-grid">
                {experiments.map((x,i)=>
                    <article key={x}>
                        <span>LAB / 0{i+1}</span>
                        <h3>{x}</h3>
                        <p>Study / prototype / technical exploration</p>
                        <b>↗</b>
                    </article>
                )}
            </div>
        </div>
    </section>}
