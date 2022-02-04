import { getGithubRepos } from './github';
import { initBuilder } from './HTMLBuilder';
import './app.css';

initBuilder(getGithubRepos);