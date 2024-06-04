#include <iostream>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */
void nhapmang(int a[],int n){
	for(int i=0;i<n;i++){
		scanf("%d",&a[i]);
	}
}
void swap(int &a, int &b){
    int temp =a;
    a=b;
    b=temp;
}
void Xuat(int a[],int n){
    for(int i = 0; i < n ; i++){
        printf("%d ",a[i]);
    }
}
void Tang(int a[], int n){
    for(int i=0;i<n-1;i++)
        for(int j=i;j<n;j++){
            if(a[i]>a[j]){
                swap(a[i], a[j]);
            }
        }
}
void Giam(int a[], int n){
    for(int i=0;i<n-1;i++)
        for(int j=i;j<n;j++){
            if(a[i]<a[j]){
                int temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
}
int main(int argc, char** argv) {
	int a[1000];
	int n;
	scanf("%d",&n);
	nhapmang(a,n);
	Tang(a,n);
	Xuat(a,n);
	printf("\n");
	Giam(a,n);
	Xuat(a,n);
	return 0;
}
