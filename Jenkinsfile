pipeline {
  agent any
  stages {
    stage('Verify Tools') {
      parallel {
        stage('Verify Tools') {
          steps {
            echo 'connect to server'
          }
        }
        stage('') {
          steps {
            echo 'check nodejs/npm version'
          }
        }
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