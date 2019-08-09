import React from 'react';
import styled from 'styled-components';
import { useTodoState } from './TodoContext';

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter(({ done }) => !done);

  const today = new Date()
  const date = today.toLocaleDateString('ko-KR');
  const weekday = today.toLocaleDateString('en', { weekday: 'long' })

  return (
    <TodoHeadBlock>
      <h1>{date}</h1>
      <div className="day">{weekday}</div>
      <div className="tasks-left">{undoneTasks.length} Todos left</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;