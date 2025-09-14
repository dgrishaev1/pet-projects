import React from "react";
import { GithubContext } from "../context/github/githubContext";
import { Link } from "react-router-dom";
import { Repos } from "../components/Repos";

export const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = React.useContext(
    GithubContext
  );
  const urlName = match.params.name;

  React.useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <p className="text-center">Загрузка</p>;
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    following,
    followers,
    public_repos,
    public_gists,
  } = user;

  return (
    <>
      <Link to="/" className="btn btn-link">
        На главную
      </Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img src={avatar_url} alt={name} style={{ width: "150px" }} />
              <h1>{name}</h1>
              {location && <p>Местоположение: {location}</p>}
            </div>
            <div className="col">
              {bio && (
                <>
                  <h3>Биография</h3>
                  <p>{bio}</p>
                </>
              )}
              <a
                href={html_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                Открыть профиль
              </a>
              <ul>
                {login && (
                  <li>
                    <strong>Никнейм: </strong>
                    {login}
                  </li>
                )}
                {company && (
                  <li>
                    <strong>Компания: </strong>
                    {company}
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>Веб-сайт: </strong>
                    {blog}
                  </li>
                )}
              </ul>

              <div className="badge badge-primary">Подписчики: {followers}</div>
              <div className="badge badge-success">Подписан: {following}</div>
              <div className="badge badge-info">
                Репозитории: {public_repos}
              </div>
              <div className="badge badge-dark">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <h2>Репозитории</h2>
      <Repos repos={repos} />
    </>
  );
};
