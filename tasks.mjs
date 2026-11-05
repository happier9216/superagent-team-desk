// 初始版本保留教学故障，让 SuperAgent 根据问题单与测试定位修复。
export function toggleTask(tasks, id) {
  return tasks.map(task => ({ ...task, completed: !task.completed }));
}
