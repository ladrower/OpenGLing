#version 330 core
layout (location = 0) in vec3 position;
layout (location = 1) in vec3 color;

uniform float horizontalOffset;
//out vec3 customColor;
out vec3 customPosition;

void main()
{
	customPosition = vec3(position.x + horizontalOffset, -position.y, position.z);
    gl_Position = vec4(customPosition, 1.0f);
    //customColor = color;
}
