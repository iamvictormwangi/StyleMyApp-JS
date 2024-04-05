export const base = `
:root {
  --animation-delay: 0.25s;
  --animation-duration: 1s;
  --animation-repeat: 1;
  --base: 0.45rem;
  --border-color: black;
  --border-style: solid;
  --border-width: 1.15px;
  --desktop-min-width: 112.505rem;
  --font-size: 1rem;
  --laptop-max-width: 112.5rem;
  --laptop-min-width: 75.005rem;
  --line-height: 1rem;
  --margin-bottom: 1rem;
  --mobile-max-width: 37.5rem;
  --mobile-min-width: 10rem;
  --radius: 0.375px;
  --shadow: 8px 8px 8px 0 rgba(0, 0, 0, 0.2);
  --shadow-1: 7px 7px 10px 3px rgba(0, 0, 0, 0.2);
  --shadow-2: 7px 7px 10px 3px rgba(0, 0, 0, 0.3);
  --shadow-3: 7px 7px 11px 4px rgba(0, 0, 0, 0.4);
  --shadow-4: 7px 8px 11px 4px rgba(0, 0, 0, 0.4);
  --shadow-5: 7px 8px 12px 4px rgba(0, 0, 0, 0.4);
  --shadow-6: 9px 8px 12px 4px rgba(0, 0, 0, 0.4);
  --shadow-7: 9px 9px 13px 4px rgba(0, 0, 0, 0.3);
  --shadow-8: 9px 9px 13px 4px rgba(0, 0, 0, 0.5);
  --shadow-9: 9px 9px 14px 4px rgba(0, 0, 0, 0.7);
  --shadow-10: 9px 9px 14px 4px rgba(0, 0, 0, 0.7);
  --shadow-11: 9px 9px 14px 4px rgba(0, 0, 0, 0.7);
  --shadow-12: 9px 9px 14px 4px rgba(0, 0, 0, 0.7);
  --tablet-max-width: 75rem;
  --tablet-min-width: 37.505rem;
  --times: times, serif;
  --title-size: 2.5rem;
  --wrapper-max-width: 60rem;
  --athelas: athelas, georgia, serif;
  --avenir: avenir next, avenir, sans-serif;
  --baskerville: baskerville, serif;
  --bodoni: Bodoni MT, serif;
  --calisto: Calisto MT, serif;
  --courier: Courier Next, courier, monospace;
  --garamold: garamond, serif;
  --georgia: georgia, serif;
  --helvetica: helvetica neue, helvetica, sans-serif;
  --monospace: monospace;
  --sans-serif: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
  --serif: serif;
  --amazon: #ff9900;
  --discord: #5865f2;
  --facebook-old: #1877f2;
  --facebook: #3b5998;
  --github: #171515;
  --gitlab: #171515;
  --google: #4285f4;
  --hackernews: #ff6600;
  --instagram: #c32aa3;
  --linkedin: #0a66c2;
  --mastadon: #2b90d9;
  --medium: #02b875;
  --microsoft: #f35022;
  --pinterest: #bd081c;
  --quora: #aa2200;
  --reddit: #ff5700;
  --snapchat: #fffc00;
  --soundcloud: #ff5500;
  --spotify: #1ed760;
  --telegram: #0088cc;
  --tiktok: #010101;
  --tumblr: #2c4762;
  --twitch: #9146ff;
  --twitter: #1da1f2;
  --vimeo: #1ab7ea;
  --whatsapp: #25d366;
  --yahoo: #430297;
  --youtube: #ff0000;
}


* {
  box-sizing: border-box;
  background-repeat: no-repeat;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
}

body,
html {
  line-height: 1.15;
  word-break: normal;
  scroll-behavior: smooth;
  min-height: 100vh;
  font-family: var(--sans-serif, sans-serif);
  color-scheme: light dark }

main,
header,
footer,
article,
aside,
section,
details {
  display: block }

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 250;
  line-height: inherit;
  color: inherit;
  font-family: var(--serif, sans-serif) }

ul {
  list-style: none }

ol {
  list-style: decimal }

dt {
  font-weight: bold }

hr {
  height: 0;
  width: 100%;
  overflow: hidden;
  border: 0;
  border-top: 1px solid;
  margin-top: 0.5em;
  margin-bottom: 1em;
  color: currentColor }

address {
  font-style: inherit }

a {
  background-color: transparent;
  color: inherit;
  cursor: pointer;
  text-decoration: none }

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted }

b,
strong {
  font-weight: bolder }

pre,
code,
samp,
kbd {
  font-family: var(--monospace, monospace);
  font-size: 90% }

small,
sub,
sup {
  font-size: 80% }

sub,
sup {
  line-height: 0 }

sup {
  vertical-align: super }

sub {
  vertical-align: sub }

blockquote {
  font-family: var(--sans-serif, sans-serif);
  font-style: italic;
  padding-left: 1em }

u {
  text-decoration: underline }

s {
  text-decoration: line-through }

svg {
  cursor: pointer;
  fill: currentColor }

canvas,
iframe,
svg,
img,
video,
audio {
  display: inline-block;
  vertical-align: middle;
  border-style: none;
  height: auto }

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  background-color: transparent;
  border-radius: 0 }

textarea {
  min-height: 2em;
  overflow: auto;
  resize: vertical }

button,
[type=button],
[type=reset],
[type=submit] {
  appearance: button }

[type=checkbox] {
  appearance: checkbox }

[type=radio] {
  appearance: radio }

select {
  text-transform: none }

button[disabled],
[type=button][disabled],
[type=reset][disabled],
[type=submit][disabled] {
  cursor: not-allowed }

fieldset {
  font-family: inherit;
  border: none }

input {
  overflow: hidden }

label {
  display: inline-block;
  font-size: inherit;
  font-weight: inherit }

legend {
  display: table;
  color: inherit;
  max-width: 100% }

progress {
  vertical-align: baseline }

summary {
  display: list-item }

noscript,
[hidden] {
  display: none }

input[readonly],
select[readonly],
textarea[readonly] {
  border-color: rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.54) }

input:disabled,
input[readonly],
textarea:disabled,
textarea[readonly] {
  background-color: lightgrey;
  cursor: not-allowed }

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none;
  }
  html {
    scroll-behavior: auto;
  }
}
[data-theme=light] {
  background-color: white;
  color: black }

[data-theme=dark] {
  background-color: #0d0d0d;
  color: white }

.alert {
  min-height: 3rem;
  min-width: 10rem;
  z-index: 1500;
  opacity: 0.85 }

.avatar {
  border-radius: 50%;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  aspect-ratio: 1 }

.avatar * {
  font-size: 1.25rem;
  margin: 0;
  padding: 0 }

.box {
  width: 100%;
  display: inline-block;
  min-height: 3rem }

.box-group {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  position: relative }

.box-group-item,
.box-group,
.box-group .box-group-item {
  margin: 0 }

.btn {
  border: var(--border-color, black) var(--border-style, solid) var(--border-width, 1.15px);
  cursor: pointer;
  text-align: center;
  font-family: var(--sans-serif, sans-serif);
  padding: 0.5rem 0.75rem }

.btn-floating {
  display: inline-block;
  position: relative;
  overflow: hidden;
  z-index: 1;
  width: 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  padding: 0;
  cursor: pointer;
  vertical-align: middle }

.btn-cta {
  padding: 2.5rem 4rem }

.carousel {
  position: relative;
  min-height: 50vh;
  width: 100% }

.dropdown-relative {
  position: relative }

.dropdown,
.dropdown-relative,
.dropdown-relative .dropdown {
  position: absolute;
  z-index: 1500;
  min-width: 10rem;
  top: calc(100% + 0.45rem);
  right: 0 }

.footer > * {
  margin-bottom: 0 }

.group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  vertical-align: middle;
  align-items: stretch }

.group [data-role-group-item],
.group .item {
  margin-bottom: 0 }

.hero {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20rem;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover }

.list {
  position: relative }

.list .item {
  padding-top: 0.35rem;
  padding-bottom: 0.35rem }

.message {
  min-width: 10rem }

.modal {
  position: absolute;
  min-width: 10rem;
  min-height: 6rem;
  z-index: 1500;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) }

.notepad {
  border-left: 0.6rem solid black;
  border-top-left-radius: 0.7rem;
  border-bottom-left-radius: 0.7rem;
  min-height: 3em;
  padding: 0.5rem 0.5rem 0.75rem }

.notification {
  min-height: 3rem;
  min-width: 10rem;
  position: absolute;
  position: fixed;
  top: 3rem;
  right: 1rem;
  z-index: 1500;
  opacity: 0.85 }

.notification-group {
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  position: fixed;
  top: 3rem;
  right: 1rem }

.notification-group .notification {
  min-height: 3rem;
  min-width: 10rem;
  z-index: 1500;
  opacity: 0.85 }

.pagination {
  list-style: none;
  display: flex;
  flex-direction: row }

.pagination .pagination-item {
  margin: 0 0.08rem }

.panel * {
  margin-bottom: 0;
  z-index: 1000 }

.panel.panel-sticky {
  position: sticky;
  top: 0;
  width: 100% }

.panel.panel-fixed {
  position: fixed;
  top: 0;
  width: 100% }

.panel .content,
.footer .content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between }

.parallax {
  height: 500px;
  overflow: hidden;
  position: relative }

.parallax .content {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10 }

.preloader {
  position: absolute;
  display: block;
  z-index: 1000;
  background-color: black;
  height: 150vh;
  width: 150vw;
  overflow: hidden }

.progress {
  background-color: rgb(219, 213, 213);
  width: 15rem;
  height: 2rem;
  border: var(--border-style, solid) var(--border-width, 1.15px) var(--border-color, black) }

 .progress .progress-meter {
  width: 15%;
  height: 100%;
  background-color: black }

table,
.table {
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  border-spacing: 0 }

table caption,
.table caption {
  padding: 0.5rem 0rem }

table thead th,
.table thead th {
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  border-spacing: 0;
  text-align: left }

table tr,
.table tr {
  margin-bottom: 0.5rem;
  border: none;
  border-spacing: 0 }

table tr th:not(last-child),
table tr td:not(last-child),
.table tr th:not(last-child),
.table tr td:not(last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding: 16px;
  vertical-align: inherit }

table tr tr:last-child th,
.table tr tr:last-child th {
  border-bottom: 0 }

table tr tr:last-child tr,
.table tr tr:last-child tr {
  border-bottom: 0 }

table td,
.table td {
  border: none }

table tfoot tr,
.table tfoot tr {
  text-align: left;
  border-spacing: 0 }

table tfoot td,
.table tfoot td {
  color: rgba(0, 0, 0, 0.6);
  padding: 1rem 4px }

table:last-child,
.table:last-child {
  border-bottom: 0 }

table tr:hover,
.table tr:hover {
  opacity: 90% }

table.table-striped tr:nth-of-type(odd),
.table.table-striped tr:nth-of-type(odd) {
  background-color: lightgrey }

table.table-striped tr:nth-of-type(odd),
.table.table-striped tr:nth-of-type(odd) {
  width: 100% }

table tr.highlight,
.table tr.highlight {
  background-color: lightgrey }

.toggler {
  position: absolute;
  font-weight: 900;
  font-size: 1.25rem;
  right: 0.8rem;
  top: 0.6rem;
  cursor: pointer;
  content: "x";
  color: red }

.toggler:hover {
  opacity: 0.95 }

.tooltip {
  position: absolute;
  visibility: hidden;
  z-index: 400;
  bottom: 4rem }

.tooltip.active {
  font-size: 0.85rem }

.tooltip.active {
  visibility: visible }

.content {
  padding: 0.5rem 0.65rem }

input[type=checkbox],
input[type=radio] {
  margin-right: 1rem }

.select,
select,
input[type=text],
input[type=password],
input[type=email],
.input,
textarea,
button {
  padding: 0.5rem;
  border: var(--border-style, solid) var(--border-width, 1.15px) var(--border-color, black) }

button,
.btn {
  border: var(--border-color, black) var(--border-style, solid) var(--border-width, 1.15px);
  cursor: pointer;
  text-align: center;
  font-family: var(--sans-serif, sans-serif);
  padding: 0.5rem 0.75rem }

.btn-floating {
  display: inline-block;
  position: relative;
  overflow: hidden;
  z-index: 1;
  width: 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  padding: 0;
  cursor: pointer;
  vertical-align: middle }

.btn-cta {
  padding: 2.5rem 4rem }

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0 }

.hoverable {
  transition: box-shadow 0.25s }

.hoverable:hover {
  box-shadow: var(--shadow) }

.img,
.video,
.img-thumb,
.video-thumb,
.thumbnail,
.thumb {
  height: auto;
  width: auto }

.responsive {
  height: auto;
  width: 100% }

.absolute-fill {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0 }

.absolute-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) }

.absolute-center-x {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) }

.absolute-center-y {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) }

.indent {
  text-indent: 1rem;
  margin-top: 0;
  margin-bottom: 0 }

.hide {
  display: none;
  visibility: hidden;
  opacity: 0 }

.show {
  display: block;
  visibility: visible;
  opacity: 1 }

.flow > :where(:not(:last-child)) {
  margin-bottom: 1rem }

h1,
.h1,
.title {
  font-size: var(--title-size, 2.5rem) }

h2,
.h2,
.subtitle {
  font-size: calc(var(--title-size, 2.5rem) - 0.25rem) }

h3,
.h3 {
  font-size: calc(var(--title-size, 2.5rem) - 0.5rem) }

h4,
.h4 {
  font-size: calc(var(--title-size, 2.5rem) - 0.75rem) }

h5,
.h5 {
  font-size: calc(var(--title-size, 2.5rem) - 1rem) }

h6,
.h6 {
  font-size: calc(var(--title-size, 2.5rem) - 1.25rem) }

@media only screen and (max-width: 45rem) {
  h1,
  .h1,
  .title {
    font-size: calc(var(--title-size, 2.5rem) - 0.5rem) }

  h2,
  .h2,
  .subtitle {
    font-size: calc(var(--title-size, 2.5rem) - 0.75rem) }

  h3,
  .h3 {
    font-size: calc(var(--title-size, 2.5rem) - 1.25rem) }

  h4,
  .h4 {
    font-size: calc(var(--title-size, 2.5rem) - 1rem) }

  h5,
  .h5 {
    font-size: calc(var(--title-size, 2.5rem) - 1.25rem) }

  h6,
  .h6 {
    font-size: calc(var(--title-size, 2.5rem) - 1.25rem) }
}

.text-link {
  cursor: pointer }

.text-link:hover {
  text-decoration: underline;
  transition: text-decoration 0.5s ease }

.text-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100% }

.p, .lead {
  line-height: var(--line-height);
  font-size: var(--font-size) }

.wrapper {
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto }

.wrapper-responsive {
  width: 100%;
  padding-left: 0.125rem;
  padding-right: 0.125rem }

@media (min-width: 36rem) {
  .wrapper {
    max-width: 33.75rem }
}
@media (min-width: 48rem) {
  .wrapper {
    max-width: 45rem }
}
@media (min-width: 62rem) {
  .wrapper {
    max-width: 60rem }
}
@media (min-width: 75rem) {
  .wrapper {
    max-width: 71.25rem }
}
@media (min-width: 87.5rem) {
  .wrapper {
    max-width: 82.5rem }
}

.input, .textarea {
  border-radius: 4px;
}

.textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  resize: none;
}

.input {
  max-width: 190px;
  padding: .15rem .5rem;
  min-height: 40px;
  outline: none;
  line-height: 1.15;
}



`

