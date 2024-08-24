export function CourseGoal({title,description}) {
    return (
      <li>
        <h2>{title}</h2>
          <p>{description}</p>
      </li>
    );
  }
  
  function App() {
    return (
      <div id="app" data-testid="app">
        <h1>Time to Practice</h1>
        <p>One course, many goals! 🎯</p>
        <ul>
        <CourseGoal title='Learn React'
        description="In-depth" />
        <CourseGoal 
        title='Learn React2'
        description="In-depth2"
        />
        
          {/* OUTPUT AT LEAST TWO CourseGoal components here */}
          {/* One of them should have a title of “Learn React” and a description of “In-depth” */}
        </ul>
      </div>
    );
  }
  
  export default App;