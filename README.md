# The Martian TV App

A Node.js app that displays the next time *The Martian* airs on TV, using the [TVMaze API](https://www.tvmaze.com/api). Hosted on a Debian-based AWS EC2 instance.

## 📸 Preview

![screenshot](public/martian-bg.jpg)

## 🚀 Setup Instructions (EC2 Debian)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/the-martian-tv-app.git
cd the-martian-tv-app
```

### 2. Install Node.js & PM2

```bash
sudo apt update && sudo apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Add Background Image

Put a screenshot of *The Martian* into the `public/` folder and name it `martian-bg.jpg`.

### 5. Run the App

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 6. Open Firewall (if needed)

```bash
sudo ufw allow 3000
```

### 7. View the App

Open your browser and go to:  
`http://<your-ec2-public-ip>:3000`

## 🔗 API Used

- [TVMaze](https://api.tvmaze.com)

## 📄 License

MIT (or replace with your license)
