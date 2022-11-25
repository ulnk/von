<center><h1>Von - Steam Playtime Booster</h1></center>

## What is it?

Von uses the Steam API to boost your steam hours while you are AFK. It has to components that are very easy to setup:

- **The Client** - This is the program that you use to interact with the server. You only need this to enter your account details and game id to start the boosting on the server.
- **The Server** - This is the actual part that increases your playtime. This can run on an external VPS which saves you from having to keep your computer on 24/7.

Youtube Tutorial coming soon.

![image](https://user-images.githubusercontent.com/93608862/203878627-1732f8b3-bc2c-4685-86ec-aa217f226a6d.png)

## How to use

### Client

1. Download the latest release from the **[releases page](https://github.com/ulnk/von/releases/latest)** and run the executable.
2. First enter the Server IP Address and wait for a connection. Once a connection is established, you will be prompted to enter your Steam account details. **NOTE! This program does not store your account details outside of your local machine! Please check this if you feel this is unsafe!**
3. Enter the game id of any steam game. You can find this by going to the game page on Steam and copying the number at the end of the URL. For example, the game id for **[Counter-Strike: Global Offensive](https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/)** is **730**.
4. Enjoy! You can now close the client and let the server do its thing.

Once you have finished, opent he client and logout before attempting to play the game.

## Getting Started with Development

_(use the releases tab for an easier setup)_

### Prerequisites

- **[Node.js](https://nodejs.org/en/)** (it is recommended to use the latest LTS version)
- **[Yarn](https://yarnpkg.com/en/docs/install)** (recommended for quicker setup, if you don't want to use Yarn, you can use change the commands to use `npm` instead)
- **[Rust](https://www.rust-lang.org/tools/install)** (make sure you have the latest stable version)
- **[Tauri Setup](https://tauri.app/v1/guides/getting-started/prerequisites/)** (follow the instructions for your operating system)

### Setup

- Clone the repository and install the dependencies

```bash
git clone https://github.com/ulnk/von.git
cd von
yarn
```

- Start the development server

```bash
yarn tauri dev
```
