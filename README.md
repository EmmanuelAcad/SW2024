openapi: 3.0.0
info:
  title: User API
  version: 1.0.0
  description: API para gerenciar usuários, incluindo criação, listagem, consulta por ID, atualização e exclusão.

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
