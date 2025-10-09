pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/siriveeramalla/smart-library.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Selenium Tests') {
            steps {
                bat 'npx mocha tests/lib.test.js'
            }
        }

        stage('Post Build') {
            steps {
                echo 'Build and Test Completed Successfully!'
            }
        }
    }

    post {
        success {
            echo '✅ All tests passed!'
        }
        failure {
            echo '❌ Some tests failed. Check logs!'
        }
    }
}
