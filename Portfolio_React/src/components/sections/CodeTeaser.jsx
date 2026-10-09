import { useTypewriter } from '../../data/useTypewriter';

const CODE_SNIPPETS = [
    // python
`import bpy

def build_scene():
    cube = bpy.ops.mesh.primitive_cube_add()
    scene = bpy.context.scene

    return scene

scene = build_scene()
print("3D scene created.")`,

    // javascript
`const buildExperience = ({ visual, logic }) => {
    const scene = combine(visual, logic);

    return scene.render();
};

const experience = buildExperience({
    visual: "3D",
    logic: "Code"
});`,

    // c#
`namespace Luca.World
{
    class Program
    {
        static void Main(string[] args)
        {
            string focus = "3D + Programming";
            Console.WriteLine("Building: " + focus);
            Console.WriteLine("System initialized.");
            Console.ReadLine();
        }
    }
}`
];

export default function Code() {
    const displayed = useTypewriter(CODE_SNIPPETS, {
        typeSpeed: 25,
        deleteSpeed: 15,
        pauseAfterType: 2000,
        pauseAfterDelete: 400,
    });

    return <section id="code" className="section">
        <style>{`
            .code-cursor {
            display: inline-block;
            width: .5ch;
            height: 1em;
            background: var(--accent1);
            margin-left: 3px;
            vertical-align: -2px;
            animation: blink 1s step-end infinite;
        }

        @keyframes blink {
            0%, 100% {
                opacity: 1;
            }

            50% {
                opacity: 0;
            }
        }
        `}</style>
        <div className="container">
            <div className="section-head">
                <span className="eyebrow">03 / Code</span>
                <div>
                    <h2 className="section-title">Code is how I make creative work repeatable, interactive and useful.</h2>
                    <p className="section-copy">I am building a foundation across Python, C#, JavaScript and React, with a focus on practical projects rather than a list of technologies.</p>
                </div>
            </div>
            <div className="code__layout">
                <div className="code-window">
                    <div className="code-window__top">
                        <span>creative-system.js</span>
                        <span>01 — 07</span>
                    </div>
                    <pre>
                        <code>{displayed}<span className="code-cursor"></span></code>
                    </pre>
                </div>
                <div className="code__facts">
                    <div>
                        <span>01</span>
                        <strong>Python</strong>
                        <p>Automation, tools and Blender workflows.</p>
                    </div>
                    <div>
                        <span>02</span>
                        <strong>JavaScript / React</strong>
                        <p>Interfaces, components and interactive web experiences.</p>
                    </div>
                    <div>
                        <span>03</span>
                        <strong>C#</strong>
                        <p>Programming fundamentals and future interactive systems.</p>
                    </div>
                    <a className="button" href="https://github.com/Lvc4br" target="_blank" rel="noreferrer">View GitHub ↗</a>
                </div>
            </div>
        </div>
    </section>
}