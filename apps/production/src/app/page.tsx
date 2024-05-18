import styles from './page.module.css';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, lorem</span>
              Welcome production 👋
            </h1>
          </div>

          <div id="hero" className="rounded">
            <div className="text-container">
              <h2>
                <span>You&apos;re up and running</span>
              </h2>
              <a href="#commands"> What&apos;s next? </a>
            </div>
            <div className="logo-container"></div>
          </div>

          <div id="middle-content">
            <div id="learning-materials" className="rounded shadow">
              <h2>Learning materials</h2>
              <a
                href="https://nx.dev/getting-started/intro?utm_source=nx-project"
                target="_blank"
                rel="noreferrer"
                className="list-item-link"
              >
                <span>
                  Documentation
                  <span> Everything is in there </span>
                </span>
              </a>
              <a
                href="https://blog.nrwl.io/?utm_source=nx-project"
                target="_blank"
                rel="noreferrer"
                className="list-item-link"
              >
                <span>
                  Blog
                  <span> Changelog, features & events </span>
                </span>
              </a>
              <a
                href="https://www.youtube.com/@NxDevtools/videos?utm_source=nx-project&sub_confirmation=1"
                target="_blank"
                rel="noreferrer"
                className="list-item-link"
              >
                <span>
                  YouTube channel
                  <span> Nx Show, talks & tutorials </span>
                </span>
              </a>
              <a
                href="https://nx.dev/react-tutorial/1-code-generation?utm_source=nx-project"
                target="_blank"
                rel="noreferrer"
                className="list-item-link"
              >
                <span>
                  Interactive tutorials
                  <span> Create an app, step-by-step </span>
                </span>
              </a>
              <a
                href="https://nxplaybook.com/?utm_source=nx-project"
                target="_blank"
                rel="noreferrer"
                className="list-item-link"
              >
                <span>
                  Video courses
                  <span> Nx custom courses </span>
                </span>
              </a>
            </div>
            <div id="other-links">
              <a
                id="nx-console"
                className="button-pill rounded shadow"
                href="https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console&utm_source=nx-project"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  Install Nx Console for VSCode
                  <span>The official VSCode extension for Nx.</span>
                </span>
              </a>
              <a
                id="nx-console-jetbrains"
                className="button-pill rounded shadow"
                href="https://plugins.jetbrains.com/plugin/21060-nx-console"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  Install Nx Console for JetBrains
                  <span>
                    Available for WebStorm, Intellij IDEA Ultimate and more!
                  </span>
                </span>
              </a>
              <div id="nx-cloud" className="rounded shadow">
                <div>
                  <h2>
                    Nx Cloud
                    <span>Enable faster CI & better DX</span>
                  </h2>
                </div>
                <p>
                  You can activate distributed tasks executions and caching by
                  running:
                </p>
                <pre>nx connect</pre>
                <a
                  href="https://nx.app/?utm_source=nx-project"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  What is Nx Cloud?{' '}
                </a>
              </div>
              <a
                id="nx-repo"
                className="button-pill rounded shadow"
                href="https://github.com/nrwl/nx?utm_source=nx-project"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  Nx is open source
                  <span> Love Nx? Give us a star! </span>
                </span>
              </a>
            </div>
          </div>

          <div id="commands" className="rounded shadow">
            <h2>Next steps</h2>
            <p>Here are some things you can do with Nx:</p>
            <details>
              <summary>Add UI library</summary>
              <pre>
                <span># Generate UI lib</span>
                nx g @nx/next:library ui
                <span># Add a component</span>
                nx g @nx/next:component ui/src/lib/button
              </pre>
            </details>
            <details>
              <summary>View project details</summary>
              <pre>nx show project production --web</pre>
            </details>
            <details>
              <summary>View interactive project graph</summary>
              <pre>nx graph</pre>
            </details>
            <details>
              <summary>Run affected commands</summary>
              <pre>
                <span># see what&apos;s been affected by changes</span>
                nx affected:graph
                <span># run tests for current changes</span>
                nx affected:test
                <span># run e2e tests for current changes</span>
                nx affected:e2e
              </pre>
            </details>
          </div>

          <p id="love">Carefully crafted with</p>
        </div>
      </div>
    </div>
  );
}
