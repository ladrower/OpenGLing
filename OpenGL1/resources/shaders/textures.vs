#version 330 core
layout (location = 0) in vec3 position;
layout (location = 2) in vec2 texCoord1;
layout (location = 3) in vec2 texCoord2;

out vec2 TexCoord1;
out vec2 TexCoord2;


uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main()
{
    gl_Position = projection * view * model * vec4(position, 1.0f);
    TexCoord1 = vec2(texCoord1.x, 1.0 - texCoord1.y);
    TexCoord2 = vec2(texCoord2.x, 1.0 - texCoord2.y);
}
