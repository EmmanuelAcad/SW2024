openapi: 3.0.0

info:
  title: SW2024 API
  description: API de gerencia de usuários
  version: 1.0.0

servers:
  - url: http://localhost:3000

paths:
  /users:
    get:
      summary: Lista todos os usuários
      responses:
        '200':
          description: Lista de usuários retornada com sucesso
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'
        '500':
          description: Erro ao obter lista de usuários

    post:
      summary: Cria um novo usuário
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/UserCreate'
      responses:
        '201':
          description: Usuário criado com sucesso
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '400':
          description: Dados inválidos fornecidos
        '500':
          description: Erro ao criar usuário

  /users/{id}:
    get:
      summary: Obtém um usuário pelo ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
          description: ID do usuário
      responses:
        '200':
          description: Usuário encontrado com sucesso
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '404':
          description: Usuário não encontrado
        '500':
          description: Erro ao buscar usuário

    put:
      summary: Atualiza um usuário pelo ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
          description: ID do usuário
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/UserUpdate'
      responses:
        '200':
          description: Usuário atualizado com sucesso
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '404':
          description: Usuário não encontrado
        '500':
          description: Erro ao atualizar usuário

    delete:
      summary: Deleta um usuário pelo ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
          description: ID do usuário
      responses:
        '204':
          description: Usuário deletado com sucesso
        '404':
          description: Usuário não encontrado
        '500':
          description: Erro ao deletar usuário

components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
          description: ID único do usuário
        name:
          type: string
          description: Nome do usuário
        email:
          type: string
          description: Email do usuário
        createdAt:
          type: string
          format: date-time
          description: Data de criação do usuário
        updatedAt:
          type: string
          format: date-time
          description: Data de atualização do usuário
      required:
        - id
        - name
        - email

    UserCreate:
      type: object
      properties:
        name:
          type: string
          description: Nome do usuário
        email:
          type: string
          description: Email do usuário
        password:
          type: string
          description: Senha do usuário
      required:
        - name
        - email
        - password

    UserUpdate:
      type: object
      properties:
        name:
          type: string
          description: Nome atualizado do usuário
        email:
          type: string
          description: Email atualizado do usuário
        password:
          type: string
          description: Senha atualizada do usuário
