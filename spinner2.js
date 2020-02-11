//Another Option
// setTimeout(() => {process.stdout.write('\r|   ')}, 100);
// setTimeout(() => {process.stdout.write('\r/   ')}, 300);
// setTimeout(() => {process.stdout.write('\r-   ')}, 500);
// setTimeout(() => {process.stdout.write('\r\\   ')}, 700);
// setTimeout(() => {process.stdout.write('\r|   ')}, 900);
// setTimeout(() => {process.stdout.write('\r/   ')}, 1100);
// setTimeout(() => {process.stdout.write('\r-   ')}, 1300);
// setTimeout(() => {process.stdout.write('\r\\   ');}, 1500);
// setTimeout(() => {process.stdout.write('\r|   ')}, 1700);


const spinnerUp = () => process.stdout.write('\r|   ');
const spinnerForward = () => process.stdout.write('\r/   ');
const spinnerFlat = () => process.stdout.write('\r-   ');
const spinnerBack = () => process.stdout.write('\r\\   ');
setTimeout(() => {spinnerUp()}, 100);
setTimeout(() => {spinnerForward()}, 300);
setTimeout(() => {spinnerFlat()}, 500);
setTimeout(() => {spinnerBack()}, 700);
setTimeout(() => {spinnerUp()}, 900);
setTimeout(() => {spinnerForward()}, 1100);
setTimeout(() => {spinnerFlat()}, 1300);
setTimeout(() => {spinnerBack();}, 1500);
setTimeout(() => {spinnerUp()}, 1700);