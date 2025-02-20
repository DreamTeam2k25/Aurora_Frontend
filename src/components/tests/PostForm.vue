<template>
    <div class="posts-wrapper">
      <div class="form-container">
        <h2>Criar Novo Post</h2>
        <form @submit.prevent="submitPost">
          <div class="form-group">
            <label for="title">Título:</label>
            <input
              id="title"
              type="text"
              v-model="post.title"
              placeholder="Digite o título"
              required
            />
          </div>
          <div class="form-group">
            <label for="content">Conteúdo:</label>
            <textarea
              id="content"
              v-model="post.content"
              placeholder="Escreva o conteúdo"
              required
            ></textarea>
          </div>
          <div class="form-group">
            <label for="images">Imagens:</label>
            <input
              id="images"
              type="file"
              multiple
              @change="handleFiles"
              accept="image/*"
            />
            <div v-if="files.length" class="file-list">
              <h4>Arquivos Selecionados:</h4>
              <ul>
                <li v-for="(file, index) in files" :key="index">
                  {{ file.name }}
                </li>
              </ul>
            </div>
          </div>
          <button type="submit" :disabled="loading">
            {{ loading ? "Enviando..." : "Criar Post" }}
          </button>
        </form>
        <div v-if="error" class="error-message">
          <p>Erro: {{ error }}</p>
        </div>
        <div v-if="successMessage" class="success-message">
          <p>{{ successMessage }}</p>
        </div>
      </div>
  
      <div class="posts-list">
        <h2>Posts Existentes</h2>
        <div v-if="loadingPosts" class="loading">Carregando posts...</div>
        <div v-else>
          <div v-for="post in posts" :key="post.id" class="post-item">
            <h3>{{ post.title }}</h3>
            <p>{{ post.content }}</p>
            <div class="post-images">
              <h4>Imagens:</h4>
              <div v-if="post.images.length" class="images-container">
                <img
                  v-for="image in post.images"
                  :key="image.id"
                  :src="image.image_url"
                  alt="Imagem do post"
                />
              </div>
              <p v-else>Sem imagens</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "PostsComponent",
    data() {
      return {
        post: {
          title: "",
          content: "",
        },
        files: [],
        loading: false,
        error: null,
        successMessage: null,
        posts: [],
        loadingPosts: true,
      };
    },
    methods: {
      handleFiles(event) {
        this.files = Array.from(event.target.files);
      },
      async submitPost() {
        this.loading = true;
        this.error = null;
        this.successMessage = null;
  
        const formData = new FormData();
        formData.append("title", this.post.title);
        formData.append("content", this.post.content);
        this.files.forEach((file) => {
          formData.append("images", file);
        });
  
        try {
          const response = await axios.post("http://localhost:8000/api/posts/", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          this.successMessage = "Post criado com sucesso!";
          console.log("Resposta da API:", response.data);
  
          // Atualiza a lista de posts
          await this.fetchPosts();
  
          this.post.title = "";
          this.post.content = "";
          this.files = [];
        } catch (error) {
          this.error = "Erro ao criar o post. Tente novamente.";
          console.error("Erro:", error.response || error);
        } finally {
          this.loading = false;
        }
      },
      async fetchPosts() {
        this.loadingPosts = true;
        try {
          const response = await axios.get("http://localhost:8000/api/posts/");
          this.posts = response.data;
        } catch (error) {
          console.error("Erro ao buscar posts:", error.response || error);
        } finally {
          this.loadingPosts = false;
        }
      },
    },
    async mounted() {
      await this.fetchPosts();
    },
  };
  </script>
  
  <style scoped>
  /* Estilos gerais */
  .posts-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
  }
  
  /* Estilos do formulário */
  .form-container {
    flex: 1;
    max-width: 600px;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .form-container h2 {
    font-size: 24px;
    margin-bottom: 15px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  input,
  textarea,
  button {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  textarea {
    resize: vertical;
  }
  button {
    background-color: #007bff;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  button:hover {
    background-color: #0056b3;
  }
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  .file-list ul {
    list-style: none;
    padding: 0;
  }
  .file-list li {
    margin: 5px 0;
  }
  .error-message {
    color: red;
    font-weight: bold;
    margin-top: 10px;
  }
  .success-message {
    color: green;
    font-weight: bold;
    margin-top: 10px;
  }
  
  /* Estilos dos posts */
  .posts-list {
    flex: 1;
    max-width: 600px;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .posts-list h2 {
    font-size: 24px;
    margin-bottom: 15px;
  }
  .post-item {
    border: 1px solid #ccc;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .post-item h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  .post-item p {
    margin: 0 0 10px;
  }
  .post-images {
    margin-top: 10px;
  }
  .images-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .images-container img {
    width: 100px;
    height: auto;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  </style>
  