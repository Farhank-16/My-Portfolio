import styles from './Skills.module.css'

const skills = [
  { icon: '⚛️', name: 'React.js'    },
  { icon: '🟢', name: 'Node.js'     },
  { icon: '🚂', name: 'Express.js'  },
  { icon: '🍃', name: 'MongoDB'     },
  { icon: '🟨', name: 'JavaScript'  },
  { icon: '🌐', name: 'HTML5'       },
  { icon: '🎨', name: 'CSS3'        },
  { icon: '💨', name: 'Tailwind'    },
  { icon: '🔌', name: 'REST API'    },
  { icon: '🔀', name: 'Socket.io'   },
  { icon: '🐙', name: 'GitHub'      },
  { icon: '📬', name: 'Postman'     },
  { icon: '🔑', name: 'JWT'         },
  { icon: '💻', name: 'VS Code'     },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="sec-header reveal">
        <span className="sec-num">02</span>
        <div className="sec-line" />
        <h2>Tech <span>Skills</span></h2>
      </div>

      <div className={`${styles.grid} reveal`}>
        {skills.map((s) => (
          <div key={s.name} className={styles.chip}>
            <span className={styles.icon}>{s.icon}</span>
            {s.name}
          </div>
        ))}
      </div>
    </section>
  )
}
