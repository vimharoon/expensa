pipeline {
  agent any
  stages {
    stage('server connection') {
      steps {
        sh 'echo "Test connection to server"'
        sh '''ssh expensa@51.15.194.138 <<EOF
 cd ~/var/www/api.haroonmohammad.com/nodejs-api/
 ls
 exit
EOF'''
      }
    }
    stage('Pull sources') {
      steps {
        echo 'pull sources from git'
      }
    }
    stage('Build app') {
      steps {
        echo 'build app install dependencies'
      }
    }
    stage('Test') {
      steps {
        echo 'test app'
      }
    }
    stage('Build application') {
      steps {
        echo 'build application'
      }
    }
    stage('Deploy') {
      steps {
        echo 'deploy app / restart server'
      }
    }
    stage('Verify') {
      steps {
        echo 'verify all good !'
      }
    }
    stage('Clean') {
      steps {
        echo 'clean up files'
      }
    }
  }
}