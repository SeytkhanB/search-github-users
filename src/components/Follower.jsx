export default function Follower({ img, html_url, login }) {
  return (
    <article>
      <img src={img} alt={`${login}s avatar`} />
      <div>
        <h4>{login}</h4>
        <a href={html_url} target="_blank">
          {html_url}
        </a>
      </div>
    </article>
  );
}
