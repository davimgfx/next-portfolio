export function getExperienceDate(lang: string): string {
  const targetDate = new Date("2023-01-01");
  const currentDate = new Date();
  const yearDifference = currentDate.getFullYear() - targetDate.getFullYear();
  const monthDifference = currentDate.getMonth() - targetDate.getMonth();

  if (yearDifference === 0) {
    if (lang === "pt-BR") {
      return `${monthDifference} meses`;
    } else {
      return `${monthDifference} months`;
    }
  } else if( yearDifference === 1){
    if (lang === "pt-BR") {
      return `${yearDifference}+ ano`;
    } else {
      return `${yearDifference}+ year`;
    }
  } else {
    if (lang === "pt-BR") {
      return `${yearDifference}+ anos`;
    } else {
      return `${yearDifference}+ years`;
    }
  }
  
  
}
