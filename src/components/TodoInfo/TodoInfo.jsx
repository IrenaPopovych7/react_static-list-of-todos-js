import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  const { user, completed, title } = todo;

  return (
    <>
      <article
        className={`TodoInfo ${completed ? 'TodoInfo--completed' : null}`}
      >
        <h2 className="TodoInfo__title">{title}</h2>
        <UserInfo user={user} />
      </article>
    </>
  );
};
