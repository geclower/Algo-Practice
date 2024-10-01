def grading_students(grades):
    final_grades = []

    for i in range(len(grades)):
        if grades[i] < 38:
            final_grades.append(grades[i])
        else:
            if (grades[i]+1)%5 == 0:
                grades[i]+=1
            elif (grades[i]+2)%5 == 0:
                grades[i]+=2
            final_grades.append(grades[i])

    return final_grades

print(grading_students([73, 67, 38, 33]))