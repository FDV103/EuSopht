# EuSopht Team Vue Project

## Project Setup

### 1. Clone Repo
Run in your terminal: 
```
git clone https://github.com/FDV103/EuSopht.git
```

Go into project folder:
```
cd EuSopht
```

### 2. Install Dependencies
```
npm install
```

### 3. Run Project

```
npm run dev
```
## Workflow

### 1. Make sure your main branch is current
```
git checkout main
git pull
```
### 2. Create your own working branch
Replace james-contact with what you want to call your branch

```
git checkout -b james-contact
```
### 3. Your page is located in src/views
The global css file where we define all light/dark theme colours is in src/assets/main.css


### 4. Save and commit your work
First run prettier so we maintain consistent format

```
npm run format
```

Next save and commit your work

```
git add .
git commit -m "message that describes your work"
```
### 5. Push your branch to GitHub
```
git push origin your-branch-name
```
### 6. Open a Pull Request
Go to the repo on GitHub
Click the Pull Requests tab
Click on the open Pull Request
Click Files changed to see your changes
If it looks good click Review changes → select Approve → Submit review
Then click Merge pull request → Confirm merge

### Next time you go to work on your branch that you've already created
```
git checkout your-branch-name
```
You NEED this in case someone else has changed shared files since you last worked:
```
git pull origin main
```
happy coding, format/save/commit/push as usual


