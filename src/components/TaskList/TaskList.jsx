import ActiveTask from './ActiveTask';
import CompleteTask from './CompleteTask';
import NewTask from './NewTask';
import FailedTask from "./FailedTask";

function TaskList({ data }) {
  return (
    <div className='space-y-6'>
      <NewTask data={data}/>
      <ActiveTask data = {data}/>
      <CompleteTask data={data}/>
      <FailedTask data={data}/>
    </div>
  )
}

export default TaskList;