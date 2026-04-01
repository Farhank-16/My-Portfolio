import styles from './Skills.module.css'

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

const skills = [
  { name: 'React.js',    icon: `${CDN}/react/react-original.svg`                },
  { name: 'Node.js',     icon: `${CDN}/nodejs/nodejs-original.svg`              },
  { name: 'Express.js',  icon: `${CDN}/express/express-original.svg`,  invert: true },
  { name: 'MongoDB',     icon: `${CDN}/mongodb/mongodb-original.svg`            },
  { name: 'JavaScript',  icon: `${CDN}/javascript/javascript-original.svg`      },
  { name: 'HTML5',       icon: `${CDN}/html5/html5-original.svg`                },
  { name: 'CSS3',        icon: `${CDN}/css3/css3-original.svg`                  },
  { name: 'Tailwind',    icon: `${CDN}/tailwindcss/tailwindcss-original.svg`    },
  { name: 'MySQL',       icon: `${CDN}/mysql/mysql-original.svg`                },
  { name: 'GitHub',      icon: `${CDN}/github/github-original.svg`,    invert: true },
  { name: 'Postman',     icon: `${CDN}/postman/postman-original.svg`            },
  { name: 'VS Code',     icon: `${CDN}/vscode/vscode-original.svg`              },
  { name: 'Git',         icon: `${CDN}/git/git-original.svg`                    },
  { name: 'JWT',         icon: 'https://jwt.io/img/favicon/favicon-32x32.png'   },
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
            <img
              src={s.icon}
              alt={s.name}
              className={`${styles.icon} ${s.invert ? styles.invert : ''}`}
            />
            {s.name}
          </div>
        ))}
      </div>
    </section>
  )
}
