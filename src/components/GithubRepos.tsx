import { useEffect, useState } from "react";
import { Github, Star, GitFork, Link as LinkIcon, Loader2 } from "lucide-react";

const GITHUB_USERNAME = "vionakaleb";
const HIDE_FORKS = true;

interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  homepage: string | null;
  topics: string[];
  fork: boolean;
  archived: boolean;
  updated_at: string;
}

type Status = "loading" | "success" | "error";

const REPOS_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=9&sort=updated`;

export const GithubRepos: React.FC = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchRepos = async () => {
      try {
        const response = await fetch(REPOS_URL, {
          signal: controller.signal,
          headers: { Accept: "application/vnd.github+json" },
        });

        // The API returns 403 with a JSON body when the rate limit is hit,
        // so a non-ok response is not always a network failure.
        if (!response.ok) {
          if (response.status === 403) {
            throw new Error(
              "GitHub's rate limit was hit (60 requests per hour for unauthenticated calls). Try again in a bit.",
            );
          }
          throw new Error(`GitHub responded with status ${response.status}.`);
        }

        const data: GithubRepo[] = await response.json();

        const visible = data
          .filter((repo) => !repo.archived)
          .filter((repo) => (HIDE_FORKS ? !repo.fork : true))
          .sort((a, b) => {
            // Repos with a real description come first.
            const aHasDesc = a.description?.trim() ? 1 : 0;
            const bHasDesc = b.description?.trim() ? 1 : 0;
            if (aHasDesc !== bHasDesc) {
              return bHasDesc - aHasDesc;
            }

            // Within each group, keep the old tiebreaker: stars, then most recent.
            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count;
            }
            return (
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime()
            );
          });

        setRepos(visible);
        setStatus("success");
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
        setErrorMessage(
          error instanceof Error ? error.message : "Something went wrong.",
        );
        setStatus("error");
      }
    };

    fetchRepos();

    return () => controller.abort();
  }, []);

  return (
    <section id="github" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          GitHub Projects
        </h2>

        {status === "loading" && (
          <div className="flex items-center justify-center gap-3 text-gray-400 py-12">
            <Loader2 className="w-6 h-6 animate-spin" />
            <span>Loading repositories...</span>
          </div>
        )}

        {status === "error" && (
          <div className="max-w-xl mx-auto text-center bg-gray-800 border border-gray-700 rounded-xl p-6">
            <p className="text-gray-300 mb-2">Could not load repositories.</p>
            <p className="text-gray-500 text-sm">{errorMessage}</p>
          </div>
        )}

        {status === "success" && repos.length === 0 && (
          <p className="text-center text-gray-400 py-12">
            No public repositories to show.
          </p>
        )}

        {status === "success" && repos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col bg-gray-800 rounded-xl p-6 shadow-2xl border border-gray-700 hover:border-indigo-500 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Github className="w-5 h-5 text-indigo-400 shrink-0" />
                  <h3 className="text-lg font-bold text-white truncate">
                    {repo.name}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm mb-4 h-16 overflow-hidden">
                  {repo.description || "No description provided."}
                </p>

                {repo.topics?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.topics.slice(0, 4).map((topic) => (
                      <span
                        key={topic}
                        className="bg-indigo-600/20 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-600"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-700 text-sm text-gray-400">
                  {repo.language && (
                    <span className="text-indigo-300">{repo.language}</span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" /> {repo.forks_count}
                  </span>
                  {repo.homepage && (
                    <span className="flex items-center gap-1 ml-auto text-indigo-400">
                      <LinkIcon className="w-4 h-4" /> Live
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
